import React from "react";
import { Carousel, Col, Row, Button, Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDescription.css";
import { useParams } from "react-router-dom";
import { productData } from "../component/Data/ProductData";
export default function ProductDescription() {
  const { productName } = useParams();
  const thisProduct = productData.find((prod) => prod.model === productName);
  return (
    <div className="container">

      <div className="product-content product-wrap clearfix product-deatil">
        <Row>
          <Col md={6} lg={5} className="order-lg-2">

            <div className="product-image">

              <Carousel>

                {thisProduct.imageurl.map((value, index) => (
                  <Carousel.Item key={index}>

                    <img
                      src={value}
                      className="img-responsive"
                      alt=""
                      style={{ width: "100%", height: "auto" }}
                    />

                  </Carousel.Item>
                ))}

              </Carousel>

            </div>

          </Col>

          <Col md={6} lg={7} className="order-lg-1">
            <h2 className="name">{thisProduct.model}</h2>

            <hr />
            <h3 className="price-container">
              ${thisProduct.price}
              <small>*includes tax</small>
            </h3>

            <div className="certified">

              <ul>

                <li>

                  <a href="javascript:void(0);">
                    Delivery time<span>7 Working Days</span>
                  </a>

                </li>

                <li>

                  <a href="javascript:void(0);">
                    Certified<span>Quality Assured</span>
                  </a>

                </li>

              </ul>

            </div>
            <hr />
            <Tab.Container id="myTab" defaultActiveKey="more-information">

              <Nav variant="pills">

                <Nav.Item>

                  <Nav.Link eventKey="more-information">
                    Product Description
                  </Nav.Link>

                </Nav.Item>

                <Nav.Item>

                  <Nav.Link eventKey="specifications">Size</Nav.Link>

                </Nav.Item>

              </Nav>

              <Tab.Content>

                <Tab.Pane eventKey="more-information">
                  <br />
                  <strong>Description Title</strong>

                  <p>
                    Integer egestas,
                    orci id condimentum eleifend, nibh nisi pulvinar eros, vitae
                    ornare massa neque ut orci. Nam aliquet lectus sed odio
                    eleifend, at iaculis dolor egestas. Nunc elementum
                    pellentesque augue sodales porta.
                    Etiam aliquet rutrum turpis, feugiat sodales
                    ipsum consectetur nec.
                  </p>

                </Tab.Pane>

                <Tab.Pane eventKey="specifications">
                  <br />

                  <dl className="">
                    <Button>6</Button>

                    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>

                    <dd>Donec id elit non mi porta gravida at eget metus.</dd>

                    <dd>Eget lacinia odio sem nec elit.</dd>
                    <br />
                    <dt>Test lists</dt>

                    <dd>A description list is perfect for defining terms.</dd>
                    <br />
                    <dt>Altra porta</dt>

                    <dd>Vestibulum id ligula porta felis euismod semper</dd>

                  </dl>

                </Tab.Pane>

              </Tab.Content>

            </Tab.Container>
            <hr />
            <Row>

              <Col xs={12} sm={6} lg={6}>

                <Button variant="success" size="lg" block>
                  Add to cart

                </Button>

              </Col>

            </Row>

          </Col>

        </Row>

      </div>

    </div>
  );
}
