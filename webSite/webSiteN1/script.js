function loadPage(event, page) {
    event.preventDefault(); // თავიდან აიცილეთ ლინკზე გადასვლა
    const xhr = new XMLHttpRequest(); // ახალი XMLHttpRequest ობიექტი

    xhr.open('GET', page, true); // GET მოთხოვნა კონკრეტული ფაილისთვის
    xhr.onload = function() {
      if (xhr.status === 200) {
        document.getElementById('content').innerHTML = xhr.responseText; // შეცვალეთ კონტენტი
        window.history.pushState({ page: page }, '', page); // განაახლეთ ისტორია
      }
    };
    xhr.send(); // გაამზადეთ მოთხოვნა
  }

  // ფეიჯების ისტორიას მიაწვდოს დაბრუნების ფუნქცია
  window.onpopstate = function(event) {
    if (event.state) {
      loadPage(null, event.state.page);
    }
  };