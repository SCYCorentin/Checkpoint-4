import React from "react";

function Footer() {
  const divStyle = {
    backgroundColor: "#b8ffb9",
  };

  const buttonStyle = {
    backgroundColor: "#ff5e62",
  };

  const emailStyle = {
    backgroundColor: "#ffffff",
  };

  return (
    <footer className=" text-center" style={divStyle}>
      <div className="container p-4">
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Abonnez vous à notre newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    style={emailStyle}
                    type="email"
                    id="form5Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example2">
                    Votre adresse mail
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-primary mb-4"
                  style={buttonStyle}
                  type="submit"
                  label="button"
                >
                  <p className="mb-1">Je m'abonne</p>
                </button>
              </div>
            </div>
          </form>
        </section>
        <section className="mb-4">
          <p>
            Une question ? Appelez-nous au 01 76 25 05 06 ou écrivez nous à
            support@corsair.com <br /> Vous pouvez aussi nous écrire via nos
            reseaux sociaux !
          </p>
        </section>
      </div>

      <div className="text-center p-3">
        © 2022 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          &nbsp;Corsair
        </a>
      </div>
    </footer>
  );
}
export default Footer;
