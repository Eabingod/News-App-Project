// New Code area
function ApiCallMain() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    ` https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=2725e7329c534b2d87f3b934acec6b33`,
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      if (response.status === "ok") {
        response.articles.forEach(function (news) {
          if(news.urlToImage == ""){
            news.urlToImage = "https://www.google.com/search?q=image+not+available+png&rlz=1C1UEAD_enIN979IN979&sxsrf=AOaemvKr0XpiQre0wsOOaGO_B7rVhkB2lg:1641193534516&tbm=isch&source=iu&ictx=1&fir=kF-2anyCmBnDrM%252CaqWht222w0Rk4M%252C_%253B-QpL1I7u3zbiBM%252C029W-ajBtZqZzM%252C_%253B1Hcr6MmWtkOBSM%252CoJz1yYsIZ-24sM%252C_%253BAzK4njUt_fxyfM%252CYLNy16IInC8tQM%252C_%253Btbzmd2bzurGOiM%252CPTQyWZm98QRm1M%252C_%253BXgy6VJHMNVpBzM%252CMcX7zI2MyXyP-M%252C_%253BZqUQB6tr_Rkh0M%252CMcX7zI2MyXyP-M%252C_%253BdXrD74mXA8I9wM%252CSXajs_7RRDNRJM%252C_%253BL-EcGCchauR_PM%252ChfV2L0bhV43jtM%252C_%253BYIud_h9B6JQLoM%252CGSOz4vCaAxtYQM%252C_%253Bd3gO7GrQCkwYCM%252CE-kU-1st-fykwM%252C_%253B9TYmiaazdY4BgM%252CBmXt3sVmseeeOM%252C_%253BuOUkQxe4qGgidM%252CCzYKdR6whgiY-M%252C_%253BGQfrV8sb4aPZ6M%252CcnD-NwFeAuCO-M%252C_&vet=1&usg=AI4_-kTcJFYNZcflfZtbuP3OfRM90N-TVg&sa=X&ved=2ahUKEwj6l4etgpX1AhWCLqYKHbzhBkAQ9QF6BAgDEAE#imgrc=kF-2anyCmBnDrM"
          }
          output += `<div class="blog-card">
          <div class="meta">
            <div class="photo" style="background-image: url(${news.urlToImage})"></div>
            <ul class="details">
              <li class="author"><a href="#">${news.author}</a></li>
              <li class="date">${news.publishedAt}</li>
            </ul>
          </div>
          <div class="description">
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <p class="read-more">
              <a href="#">Read More at ${news.source.name}</a>
            </p>
          </div>
        </div>`;
        });
      }

      document.getElementById("home-articles").innerHTML = output;
    }
  };

  xhr.send();
}

function ApiCallCategory(category) {
  console.log("Hiii ");
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2725e7329c534b2d87f3b934acec6b33`,
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      if (response.status === "ok") {
        response.articles.forEach(function (news) {
          output += `<div class="blog-card">
          <div class="meta">
            <div class="photo" style="background-image: url(${news.urlToImage})"></div>
            <ul class="details">
              <li class="author"><a href="#">${news.author}</a></li>
              <li class="date">${news.publishedAt}</li>
            </ul>
          </div>
          <div class="description">
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <p class="read-more">
              <a href="#">Read More at ${news.source.name}</a>
            </p>
          </div>
        </div>`;
        });
      }

      document.getElementById("home-articles").innerHTML = output;
    }
  };

  xhr.send();
}

// App Call Class
class News {
  topHeadLines() {
    ApiCallMain();
  }

  business() {
    ApiCallCategory("business");
  }
  entertainment() {
    ApiCallCategory("entertainment");
  }
  health() {
    ApiCallCategory("health");
  }
  general() {
    ApiCallCategory("general");
  }
  science() {
    ApiCallCategory("science");
  }
  sports() {
    ApiCallCategory("sports");
  }
  technology() {
    ApiCallCategory("technology");
  }
}

// Eventlistner

document.querySelector(".main").addEventListener("click", function () {
  const news = new News();
  news.topHeadLines();
});

document.querySelector(".business").addEventListener("click", function () {
  const news = new News();
  news.business();
});
document.querySelector(".entertainment").addEventListener("click", function () {
  const news = new News();
  news.entertainment();
});
document.querySelector(".health").addEventListener("click", function () {
  const news = new News();
  news.health();
});
document.querySelector(".general").addEventListener("click", function () {
  const news = new News();
  news.general();
});
document.querySelector(".science").addEventListener("click", function () {
  const news = new News();
  news.science();
});
document.querySelector(".sports").addEventListener("click", function () {
  const news = new News();
  news.sports();
});
document.querySelector(".technology").addEventListener("click", function () {
  const news = new News();
  news.technology();
});

const main = new News();
main.topHeadLines();
