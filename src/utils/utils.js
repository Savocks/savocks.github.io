export const getFrontmatterFromNodes = (nodes) => nodes.map(({frontmatter, excerpt}) => ({...frontmatter, excerpt}))
export const getMDXFromNodes = ({frontmatter, body}) => {
  console.log(body);
  return ({...frontmatter, body})
}
