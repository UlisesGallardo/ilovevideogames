import React from 'react'
import {useLocation} from 'react-router-dom';
import { Container , ListGroup, Image, Row, Col } from 'react-bootstrap';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import 'chart.js/auto';    

import { Bar } from 'react-chartjs-2';

function InfoGame() {
    const location = useLocation(); 
    var informacion = location.state.Info;
    console.log(informacion);

    var platforms = informacion["platforms"];
    var stores = informacion["stores"];
    var ratings = informacion["ratings"];
    var short_screenshots = informacion["short_screenshots"];
    var genres = informacion["genres"];

    const labels = ['exceptional', 'recommended', 'meh', 'skip'];
    const values = ratings.map((item) => item["count"])
    //console.log(titulos, porcentaje, labels)

    const data = {
      labels,
      datasets: [
        {
          label: 'Ratings de Usuarios',
          data: values,
          backgroundColor: 'rgba(205, 92, 92, 1)',
        }
      ],
    };

    return (
      <>
        <Container fluid>
          <div>
              <center><h1>{informacion['name'] }</h1></center>

            <Row xs="auto">
              <Col>
                {platforms && platforms.length > 0 &&
                  <Container>
                      <p className="fs-4">Plataformas</p>
                      <ListGroup key={"xl"} horizontal={"xl"} className="my-2">
                        { platforms.map((item, index) => ( 
                              <ListGroup.Item key={index}>{item["platform"]["name"]}</ListGroup.Item>
                          ))}
                      </ListGroup>
                  </Container>
                } 
              </Col>
              <Col>
                {stores && stores.length>0 && 
                <Container fluid>
                    <p className="fs-4">Tiendas</p>
                    <ListGroup horizontal> 
                    {stores.map((item, index) => ( 
                          <ListGroup.Item key={index}>{item["store"]["name"]}</ListGroup.Item>
                      ))}
                  </ListGroup>
                </Container>
                }
              </Col>

              <Col>
                {genres && genres.length>0 && 
                <Container fluid>
                    <p className="fs-4">Generos</p>
                    <ListGroup horizontal> 
                    {genres.map((item, index) => ( 
                          <ListGroup.Item key={index}>{item["name"]}</ListGroup.Item>
                      ))}
                  </ListGroup>
                </Container>
                }
              </Col>
            </Row>

            <Container fluid="sm">
                {<Bar data={data}  options={{ maintainAspectRatio: true }}/>}
            </Container>  

          </div>
          
        </Container>     
        { short_screenshots && short_screenshots.length > 0 &&
                <Container fluid>
                  <p className="fs-2">Short_screenshots</p>

                  <ResponsiveMasonry
                      columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}
                  >
                      <Masonry>
                        {short_screenshots.map((item, index) => ( 
                          <div key={index}>
                              <Image src={item["image"]}  alt='...' style={{width:"100%", display: "block"}}/>
                          </div>
                        ))}
                      </Masonry>
                  </ResponsiveMasonry>


                </Container>
              }    
        </> 
      )
}

export default InfoGame
