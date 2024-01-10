export const sectionDataRu = {
  query: { label: 'Запрос', name: 'firstName' },
  response: { label: 'Ответ', name: 'firstName' },
};

export const sectionDataEn = {
  query: { label: 'Request', name: 'firstName' },
  response: { label: 'Response', name: 'firstName' },
};

export const initialQuery = `query {
characters(page: 2, filter: { name: "rick" }) {
info {count}
results {
name
}
}
location(id: 1) {
id
}
episodesByIds(ids: [1, 2]) {
id
}
}`;
