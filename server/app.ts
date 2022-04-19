import * as express from 'express';
import fetch from "node-fetch";
import { Products, Device } from './ts-utils/interfaces';
import * as cors from 'cors';
import * as parser from 'body-parser'

const app = express();

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

const port = process.env.PORT || 8080;

app.use(cors(corsOptions))
app.use(parser.json())
app.use(express.json())
app.use(parser.urlencoded({ extended: true }))

app.get('/:page', async (req, res) => {
    const data = await fetch("https://static.ui.com/fingerprint/ui/public.json");
    const result = await data.json() as Products;
    const pageStart = Number(req.params.page) > 0  ? (15 * Number(req.params.page) + 1) : 0; 
    const pageEnd = Number(req.params.page) > 0 ? (15 * Number(req.params.page) + 16) : 15;
    const page = {} as Products;
    page.amount = result.devices.length; 
    page.devices = result.devices.slice(pageStart, pageEnd);
    res.json(page);
}) 

app.get('/id/:id', async (req, res) => {
    const data = await fetch("https://static.ui.com/fingerprint/ui/public.json");
    const result = await data.json() as Products;
    const device = result.devices.filter((device: Device) => device.icon.id === req.params.id)
    res.json(device[0]);
}) 

app.get('/:page/:line', async (req, res) => {
    const data = await fetch("https://static.ui.com/fingerprint/ui/public.json");
    const result = await data.json() as Products;
    const pageStart = Number(req.params.page) > 0 ? (15 * Number(req.params.page) + 1) : 0; 
    const pageEnd = Number(req.params.page) > 0? (15 * Number(req.params.page) + 16) : 15;
    const page = {} as Products;
    const searchQuery = req.query.search as string;
    const filteredResult = result.devices.filter((device : Device) => device.line.id === req.params.line || req.params.line === 'all');
    const searchResults = filteredResult.filter((device : Device) => device.product.name.toUpperCase().includes(searchQuery.toUpperCase()));
    page.amount = searchResults.length;
    page.devices = searchResults.slice(pageStart, pageEnd) 
    res.json(page);
})

app.listen(port, () => {
    console.log('The application is running!');
})