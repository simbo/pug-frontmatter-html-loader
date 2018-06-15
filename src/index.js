import { compile } from 'pug';
import { getOptions } from 'loader-utils';
import grayMatter from 'gray-matter';

export default function pugFrontmatterLoader(source) {

  const { content, data } = grayMatter(source);

  const customOptions = getOptions(this);

  const options = {
    ...customOptions,
    filename: this.resourcePath
  };

  const template = compile(content, options);

  template.dependencies.forEach(
    dependency => this.addDependency(dependency)
  );

  return template(data);

}
