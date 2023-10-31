import makeApiRequest from "./common/make-api-request.js";

export async function getAll({ filter, onlyPublished, pagination = {} } = {}) {
  return await makeApiRequest("/news", "GET", {
    query: { onlyPublished, filter, ...pagination },
  });
}

export async function getById(id) {
  const service = `/news/${id}`;
  return await makeApiRequest(service, "GET");
}

export async function getCount() {
  return await makeApiRequest("/news/count", "GET");
}

export async function create(data) {
  return await makeApiRequest("/news", "POST", { data });
}

export async function update(data) {
  const service = `/news/${data.get("id")}`;
  data.delete("id");
  return await makeApiRequest(service, "PUT", { data });
}

export async function remove(id) {
  const service = `/news/${id}`;
  return await makeApiRequest(service, "DELETE");
}
