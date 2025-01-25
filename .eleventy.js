export default function(eleventyConfig) {
    // Копирование ресурсов - папки `src/*` в папку `public`
    eleventyConfig.addPassthroughCopy('favicon.ico');
    eleventyConfig.addPassthroughCopy('src/theme/img');
    eleventyConfig.addPassthroughCopy('src/theme/font');
    eleventyConfig.addPassthroughCopy('src/theme/css');
    eleventyConfig.addPassthroughCopy('src/theme/js');

    // Фильтры
    eleventyConfig.addFilter("wrapTables", function(content) {
      const tableRegex = /<table[\s\S]*?<\/table>/g;
  
      // Добавляем обертку для каждой таблицы
      return content.replace(tableRegex, function(table) {
        return `<div class="table-wrap">${table}</div>`;
      });
    });

    return {
        dir: {
          input: 'src',
          output: 'public',
          includes: 'components',
          layouts: 'layouts'
        }
    };
};