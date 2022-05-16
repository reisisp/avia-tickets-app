export default class TicketsService {
  _apiBase = 'https://aviasales-test-api.kata.academy';

  async getRes(str) {
    for (let count = 0; count < 5; count++) {
      const res = await fetch(`${this._apiBase}${str}`);
      if (!res.ok && count === 4) {
        throw new Error(`Could not fetch url: ${res.status}`);
      }
      if (res.ok) {
        return await res.json();
      }
    }
  }

  getSearchId() {
    return this.getRes('/search');
  }

  async getTickets(id) {
    return this.getRes(`/tickets?searchId=${id}`);
  }
}
