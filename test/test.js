var chai = require("chai");
var chaiHttp = require("chai-http");
var should = chai.should();
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// this doesn't work still because of the way it is launched
// process.env["NODE_NO_WARNINGS"] = 1;

chai.use(chaiHttp);

describe("/GET Hello World and Date", () => {
  it('it should GET the String "Hello World" and current date', (done) => {
    chai
      .request("https://localhost:8443")
      .get("/api/hello")
      .auth("admin", "harley")
      .end((err, res) => {
        if (err) {
          console.log(err); // outputs null
        }

        console.log(res.text);
        res.text.should.include("Hello World");
        res.text.should.include(new Date().toDateString());
        done();
      });
  });
});

describe("/GET Hello World Redirect", () => {
  it("it should Redirect via SSL", (done) => {
    chai
      .request("http://localhost:8000")
      .get("/api/hello")
      .redirects(1)
      .end((err, res) => {
        if (err) {
          console.log(err); // outputs null
        }
        res.should.redirectTo("https://localhost:8443/api/hello");
        res.should.have.redirect;
        done();
      });
  });
});

describe("/GET Hello World Redirect", () => {
  it("it should Redirect via SSL", (done) => {
    chai
      .request("http://localhost:8000")
      .get("/api/hello")
      .redirects(1)
      .end((err, res) => {
        if (err) {
          console.log(err); // outputs null
        }
        res.should.redirectTo("https://localhost:8443/api/hello");
        res.should.have.redirect;
        done();
      });
  });
});

describe("/GET Should reject a specifed user agent", () => {
  it("it should reject hackers", (done) => {
    chai
      .request("https://localhost:8443")
      .get("/api/hello")
      .set("User-Agent", "h4ck3r")
      .end((err, res) => {
        if (err) {
          console.log(err); // outputs null
        }
        res.status.should.equal(403);
        done();
      });
  });
});
