export default (html: string) => {
  const regex = /youtube\s+"(.+?)"/g
  const replacer =
    '<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">' +
    '  <iframe src="//www.youtube.com/embed/$1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allowfullscreen title="YouTube Video"></iframe>' +
    "</div>"
  return html.replace(regex, replacer)
}
