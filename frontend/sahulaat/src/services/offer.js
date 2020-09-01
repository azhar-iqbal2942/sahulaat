import http from "./http";

export function getServices() {
  return http.get("http://127.0.0.1:8000/api/services");
}

export function getOfferList() {
  return http.get(`http://127.0.0.1:8000/api/services/offers`);
}

export function getUserOfferList(id) {
  return http.get(`http://127.0.0.1:8000/api/services/user/offers/${id}`);
}

export function getuserDetail(id) {
  return http.get(`http://127.0.0.1:8000/api/user/new/${id}`);
}

export function getPhoneBookList() {
  return http.get("http://127.0.0.1:8000/api/user/phonebook/");
}

export function getOfferDetail(id) {
  return http.get(`http://127.0.0.1:8000/api/services/offers/detail/${id}`);
}

export function getCommentList(id) {
  return http.get(`http://127.0.0.1:8000/api/comment/offer/${id}`);
}

export function setOffer(data, selectedOption, author_id) {
  return http.post(`http://127.0.0.1:8000/api/services/offer/create/`, {
    title: data.title,
    description: data.description,
    price: data.price,
    author: author_id,
    service: selectedOption,
  });
}

export function setComment(content, author_id, offer_id) {
  return http.post(`http://127.0.0.1:8000/api/comment/create/`, {
    content: content,
    author: author_id,
    offer: offer_id,
  });
}

export function updateUserProfile(id, user) {
  return http.put(`http://127.0.0.1:8000/api/user/new/update/${id}`, user);
}
