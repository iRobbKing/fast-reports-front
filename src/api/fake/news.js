export async function getAll({ filter, pagination }) {
  let result = [
    {
      id: "1",
      title: "Some Title",
      content: "Some news for today.",
      imageUrl: "url",
      publishDate: new Date("11/2/2023 12:12:12"),
    },
    {
      id: "2",
      title: "Another Title",
      content: "Another news for today.",
      imageUrl: "url",
      publishDate: new Date("11/2/2023 12:12:12"),
    },
    {
      id: "3",
      title: "Some Another Title",
      content: "Some Another news for today.",
      imageUrl: "url",
      publishDate: new Date("11/2/2023 12:12:12"),
    },
    {
      id: "4",
      title: "Another Title",
      content: "Another news for today.",
      imageUrl: "url",
      publishDate: new Date("11/2/2023 12:12:12"),
    },
  ];
  if (filter)
    result = result.filter(({ title }) => title.toLowerCase().includes(filter.toLowerCase()));
  if (pagination)
    result = result.slice(pagination.start, pagination.start + pagination.count);
  return result;
}

export async function getById(id) {
  const all = await getAll({ pagination: { start: 0, count: -1 } });
  const news = all.find((news) => news.id === id);
  if (!news) throw new Error(`Failed to find news with id: ${id}.`);
  return news;
}

export async function create({ title, content, imageFile, publishDate }) {
  if (!title.trim())
    throw new Error(`title can't be empty`);

  if (!content.trim())
    throw new Error(`content can't be empty`);

  if (!publishDate)
    throw new Error(`no public date specified`);

  console.log("created", title, imageFile, publishDate);

  return null;
}

export async function update({ id, title, content, imageFile, publishDate }) {
  console.log("update");
  console.dir({ id, title, content, imageFile, publishDate });
  return { imageUrl: "newImageUrl" };
}

export async function remove(id) {
  console.log("removed ", id);
  return null;
}
