import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getById(id).then((result) => setProduct(result.data.data));
  }, []);
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://upload.wikimedia.org/wikipedia/tr/5/57/Anahtar_Zinciri_%28yaz%C4%B1l%C4%B1m%29_Icon.png"
            />
            <Card.Header>{product.id}</Card.Header>
            <Card.Meta>{product.productName}</Card.Meta>
            <Card.Meta>{product.category.categoryName}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
