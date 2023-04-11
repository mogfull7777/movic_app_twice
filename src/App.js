import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
const App = () => {


    // 1.  useState => 영화 데이터를 담는 그룻을 설정.
    const [movies, setMovies] = useState([])

    // 2. 영화 정보를 가져오는 함수를 선언. async - await sms WKr
    //  네트워크 연결할 떈 async 추가.
    const getMovies = async () => {
        const address = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1"
        try {
            // 1순위 실행
            // post = 던져줌. get = 가져옴. put = 수정. delete = 식제.
            const res = await axios.get(address)

            console.log("++++++++++", res.data.results)
            setMovies(res.data.results)

        } catch (err) {
            // 트라이에서 발생되는 모든 에러는 캐치로 간다.
            console.log(err)
        }

    }

    // 무조건 실행되는 함수.
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Container>
            <Row>
                {movies && movies.map(m => (
                    <Col className={"mt-5"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + m.poster_path} />
                            <Card.Body>
                                <Card.Title>{m.title.slice(0, 15)}</Card.Title>
                                <Card.Text>
                                    {m.overview.slice(0, 90)}
                                </Card.Text>
                                <Card.Text>
                                    출시일 : {m.release_date}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default App;

// 1. 위에서 아래 방향으로 해석.
// 2. = 을 기준으로 오른쪽에서 왼쪽으로 치환한다. ex) 1 = 2 => 1은 2다 X,  2가 1이다 O
// 3. . 하위 메소드를 호출할 때 사용
// 4. , 그리고로 해석한다.

// 외우는 거 X, 다시 할 수 있을정도로