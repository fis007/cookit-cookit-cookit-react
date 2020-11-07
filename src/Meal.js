import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function Meal({ meal }) {
  return (
    <div style={{ width: "30%", padding: "2%" }}>
      <Card>
        <CardImg top width="100%" src={meal.url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{meal.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Preparation time: {meal.prep_time}
          </CardSubtitle>
          <CardText>
            Cookware required:
            <ul>
              {meal.cookware.map((ware) => {
                return <li>{ware}</li>;
              })}
            </ul>
          </CardText>
          <Button>Order now</Button>
        </CardBody>
      </Card>
    </div>
  );
}
