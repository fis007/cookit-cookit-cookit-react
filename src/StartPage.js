import React, { useContext } from "react";
import { Button } from "reactstrap";
import SessionContext from "./contexts/SessionContext";

const cookitLogo =
  "https://lh3.googleusercontent.com/KGNjoAJbIQVOFXvy5pLfmXd9hQMLE4uf44f8DXwmeuURBqywHPd2usIjlQRYgfPzDGU-c4-eBQ0bngdFFBm0GTBdPSxwixOK2ugQFJPVzdwvCl_tDgfAe8ocfqCOpUp3-ab39nKQ_JP-vnkOI8_aC8txUJucVsS3hAvoqQxSMEYEG7yRykQebrK_ogKLvq8AhPtWDQIJ-v-RTz3KebUKNns06YL42nvPHw2PDKER4dAUsdIwmu5WvCbVnP3ZRBMwzCPGrnZiXx1tyrKFBXlJbxwkL0Ih959roDt7lI7sJxPhe7ak6EmvXUipSWoIzSSDXPu3jAQ8ztmMgEhh7fZRpmYnY4rYdTSscFWV1N-gwPKJH5gzpoNkQOlboR7nNsnBMnzDBenzT2f4JU1O3qLpNpbrCN9fL-iwt1hYs-pUfpLIXvB2viNlAY6FiBrXOFkczXTJiWVNvdzXseIdo841REwDfZwEOJ6otSVmJ1wtKo7Q3C3IOil2-S58309uluAJEApE4n77gdNPK4AE4HTxAUuVm3JDpVUp0c5TitcUO2SO6rc7NrLaogRVXALFGWxmZjrIw6ju5RFcHueUM5op-IVzKw3qD-WZxNhR5nGq1U7RIQauxOh9kE0aCJKifyZOkkt4Y4dNmLO-3CvUohuFqWHa3pXw_QgaTDXBCKAsDU58VlcNsw-FKs0CAyE=w250-h233-no?authuser=0";

export default function StartPage() {
  const { toggle } = useContext(SessionContext);
  return (
    <div style={{ textAlign: "center", marginTop: "1%" }}>
      <div>
        <img src={cookitLogo} />
      </div>
      <div className="btn-group-vertical">
        <Button onClick={() => toggle()} className="mt-1" color="primary">
          Login
        </Button>
        <Button
          onClick={() => console.log("Sign Up")}
          className="mt-1"
          color="primary"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
