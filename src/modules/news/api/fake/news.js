export async function getAll(start, end) {
  if (start < 0)
    throw new Error(`Invalid parameter.`);

  return [
    {
      id: "1",
      title: "Some Title",
      content: "Some news for today.",
      image: "url",
      publishDate: "11/2/2023 11:11:11",
    },
    {
      id: "2",
      title: "Another Title",
      content: "Another news for today.",
      image: "url",
      publishDate: "11/2/2023 12:12:12",
    },
    {
      id: "3",
      title: "Some Another Title",
      content: "Some Another news for today.",
      image: "url",
      publishDate: "11/2/2023 12:12:12",
    },
    {
      id: "4",
      title: "Another Title",
      content: "Another news for today.",
      image: "url",
      publishDate: "11/2/2023 12:12:12",
    },
  ].slice(start, end);
}

export async function getById(id) {
  const news = await getAll(0, -1);
  const result = news.find((news) => news.id === id);

  if (!result)
    throw new Error(`Invalid parameter.`);

  return result;
}
