class HttpClient {
  constructor(options = {}) {
    this._baseURL = options.baseURL || "";
    this._headers = options.headers || {};
  }

  setHeader(key, value) {
    this._headers[key] = value;
    return this;
  }

  setBasicAuth(username, password) {
    this._headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
    return this;
  }

  setBearerAuth(token) {
    this._headers.Authorization = `Bearer ${token}`;
    return this;
  }

  async _fetchJSON(endpoint, options = {}) {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers,
    });

    if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204)
      return res.json();

    return undefined;
  }

  get(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: "GET",
    });
  }

  post(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: JSON.stringify(body),
      method: "POST",
    });
  }

  delete(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      parseResponse: false,
      ...options,
      method: "DELETE",
    });
  }
}

const httpClient = new HttpClient({
  baseURL: "/api/",
  headers: { "Content-Type": "application/json" },
});

export default httpClient;
