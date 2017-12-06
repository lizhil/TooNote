import io from '../util/io';
import renderer from '../renderer';
import inlineCss from 'inline-css';

// 获取带样式的html
const getHtmlWithCss = async function(md, cssList = []){
	let content = renderer.render(md);
	let cssText = io.getFileText('/style/htmlbody.css');
	cssText += io.getFileText('/node_modules/highlight.js/styles/tomorrow.css');
	cssList.forEach((cssPath) => {
		cssText += io.getFileText(cssPath);
	});
	content = await inlineCss(`<body class="htmlBody">${content}</body>`, {
		url: '/',
		extraCss: cssText
	});
	return content;
};

export default async function(format, noteTitle, noteContent){
	let content = '';
	switch(format){
		case 'md':
			content = noteContent;
			break;
		case 'htmlBody':
			content = renderer.render(noteContent);
			break;
		case 'htmlBodyWithCss':
			content = await getHtmlWithCss(noteContent);
			break;
		case 'html':
		case 'pdf':
			let body = renderer.render(noteContent);
			// var postcss = require('postcss');
			// var atImport = require('postcss-import');
			let css = io.getFileText('/style/htmlbody.css');
			// 加载PDF样式
			if(format === 'pdf'){
				css += io.getFileText('/style/pdf.css');
			}
			// css += io.getFileText('/node_modules/highlight.js/styles/github-gist.css');
			css += io.getFileText('/node_modules/highlight.js/styles/tomorrow.css');
			/*var outputCss = postcss()
				.use(atImport())
				.process(css, {
					from: __dirname + '/render.css'
				})
				.css;*/

			content = '<!doctype html><html>\n' +
					'<head>\n' +
					'<meta charset="utf-8">\n' +
					'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
					'<meta name="author" content="TooNote">\n' +
					'<title>' + noteTitle + '</title>\n' +
					'<style>\n' + css + '</style>\n' +
					'</head>\n' +
					'<body class="htmlBody">\n' + body + '</body>\n</html>';
			break;
	}
	io.export(format, content, noteTitle);
}
