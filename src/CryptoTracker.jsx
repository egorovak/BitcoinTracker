import React, { useState, useEffect } from "react";
import { Card, Container, Row, Accordion } from 'react-bootstrap';
import axios from "axios";
 

const CryptoTracker = () => {

    const [BTCBuy, setBTCBuy] = useState([]);
    const [BTCSell, setBTCSell] = useState([]);

    const [ETHBuy, setETHBuy] = useState([]);
    const [ETHSell, setETHSell] = useState([]);

    const [BTCBuy2, setBTCBuy2] = useState([]);
    const [BTCSell2, setBTCSell2] = useState([]);

    const [ETHBuy2, setETHBuy2] = useState([]);
    const [ETHSell2, setETHSell2] = useState([]);

    const bestBTCbuy = Math.min(BTCBuy, BTCBuy2)

    let bestMarketBTCbuy
    if(BTCBuy>=BTCBuy2){
      bestMarketBTCbuy = "Gemini"
    } else{
      bestMarketBTCbuy = "Coinbase"
    }

    const bestBTCsell = Math.max(BTCSell, BTCSell2)

    let bestMarketBTCSell
    if(BTCSell<=BTCSell2){
      bestMarketBTCSell = "Gemini"
    } else{
      bestMarketBTCSell = "Coinbase"
    }

    const bestETHbuy = Math.min(ETHBuy, ETHBuy2)

    let bestMarketETHBuy
    if(ETHBuy>=ETHBuy2){
      bestMarketETHBuy = "Gemini"
    } else{
      bestMarketETHBuy = "Coinbase"
    }

    const bestETHsell = Math.max(ETHSell, ETHSell2)
    
    let bestMarketETHSell
    if(ETHSell<=ETHSell2){
      bestMarketETHSell = "Gemini"
    } else{
      bestMarketETHSell = "Coinbase"
    }

  

    const fetchData = () => {
        const BTCBuyAPI ='https://api.coinbase.com/v2/prices/BTC-USD/buy'
        const BTCSellAPI ='https://api.coinbase.com/v2/prices/BTC-USD/sell'
        
        const ETHBuyAPI = 'https://api.coinbase.com/v2/prices/ETH-USD/buy'
        const ETHSellAPI = 'https://api.coinbase.com/v2/prices/ETH-USD/sell'
    
        const BTCBuyAPI2 ='https://api.gemini.com/v1/pubticker/btcusd'
        const BTCSellAPI2 ='https://api.gemini.com/v1/pubticker/btcusd'

        const ETHBuyAPI2 = 'https://api.gemini.com/v1/pubticker/ethusd'
        const ETHSellAPI2 = 'https://api.gemini.com/v1/pubticker/ethusd'

        const getBTCBuy = axios.get(BTCBuyAPI)
        const getBTCSell = axios.get(BTCSellAPI)

        const getETHBuy = axios.get(ETHBuyAPI)
        const getETHSell =axios.get(ETHSellAPI)

        const getBTCBuy2 = axios.get(BTCBuyAPI2)
        const getBTCSell2 = axios.get(BTCSellAPI2)

        const getETHBuy2 = axios.get(ETHBuyAPI2)
        const getETHSell2 =axios.get(ETHSellAPI2)

        axios.all([getBTCBuy, getBTCSell, getETHBuy, getETHSell, getBTCBuy2, getBTCSell2, getETHBuy2, getETHSell2]).then(
            axios.spread((...allData) => {
                const getDataBTCBuy = allData[0].data.data.amount
                const getDataBTCSell = allData[1].data.data.amount
                const getDataETHBuy = allData[2].data.data.amount
                const getDataETHSell = allData[3].data.data.amount

                const getDataBTCBuy2 = allData[4].data.ask
                const getDataBTCSell2 = allData[5].data.bid
                const getDataETHBuy2 = allData[6].data.ask
                const getDataETHSell2 = allData[7].data.bid

                    console.log(getDataBTCSell)
        setBTCBuy(getDataBTCBuy)
        setBTCSell(getDataBTCSell)
        setETHBuy(getDataETHBuy)
        setETHSell(getDataETHSell)

        setBTCBuy2(getDataBTCBuy2)
        setBTCSell2(getDataBTCSell2)
        setETHBuy2(getDataETHBuy2)
        setETHSell2(getDataETHSell2)

            })
        )
    }


useEffect(() => {
    fetchData()
}, [])


 return (
<div>
<h1 className="text-center m-3 p-2">
    Cryptocurrency Market Rates
</h1>
<Container className="text-center">
  <Row className="justify-content-md-center"> 
<Card style={{ width: '18rem' }}
className="shadow-sm rounded m-3 p-2 align-items-center">
  <Card.Body>
    <Card.Title>Bitcoin Market</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Coinbase</Card.Subtitle>
    <Card.Text>
     Bitcoin Buy: ${BTCBuy}  
    </Card.Text>
    <Card.Text>
     Bitcoin Sell: ${BTCSell} 
    </Card.Text>

    <Card.Link href="https://www.coinbase.com/buy-bitcoin">Buy from Coinbase</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}
className="shadow-sm rounded m-3 p-2 align-items-center">
  <Card.Body>
    <Card.Title>Bitcoin Market</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Gemini</Card.Subtitle>
    <Card.Text>
     Bitcoin Buy: ${BTCBuy2}  
    </Card.Text>
    <Card.Text>
     Bitcoin Sell: ${BTCSell2} 
    </Card.Text>

    <Card.Link href="https://www.gemini.com/">Buy from Gemini</Card.Link>
  </Card.Body>
</Card>
</Row>

<Row className="justify-content-md-center">
<Card style={{ width: '18rem' }}
className="shadow-sm rounded m-3 p-2  align-items-center">
  <Card.Body>
    <Card.Title>Ethereum Market</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Coinbase</Card.Subtitle>
    <Card.Text>
    Ethereum Buy: ${ETHBuy}  
    </Card.Text>
    <Card.Text>
     Bitcoin Sell: ${ETHSell} 
    </Card.Text>

    <Card.Link href="https://www.coinbase.com/buy-ethereum">Buy from Coinbase</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}
className="shadow-sm rounded m-3 p-2  align-items-center">
  <Card.Body>
    <Card.Title>Ethereum Market</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Gemini</Card.Subtitle>
    <Card.Text>
    Ethereum Buy: ${ETHBuy2}  
    </Card.Text>
    <Card.Text>
     Bitcoin Sell: ${ETHSell2} 
    </Card.Text>

    <Card.Link href="https://www.gemini.com/">Buy from Gemini</Card.Link>
  </Card.Body>
</Card>
</Row>

<Row className="justify-content-md-center">
<Accordion style={{ width: '40rem' }} defaultActiveKey="0"
className="align-items-center m-3 p-2">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is the best value for Bitcoin Market? </Accordion.Header>
    <Accordion.Body>
<h6>Best Buy: </h6> At ${bestBTCbuy} per Bitcoin from {bestMarketBTCbuy}
<h6 className="m-2">Best Sell:</h6> At ${bestBTCsell} per Bitcoin from {bestMarketBTCSell}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is the best value for Ethereum Market?</Accordion.Header>
    <Accordion.Body>
    <h6>Best Buy: </h6> At ${bestETHbuy} per Ethereum from {bestMarketETHBuy}
    <h6 className="m-2">Best Sell:</h6> At ${bestETHsell} per Ethereum from {bestMarketETHSell}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Row>

</Container>
</div>
 )
 };
 export default CryptoTracker;

