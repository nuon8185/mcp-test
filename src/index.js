const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// CORS 설정
app.use(cors());

// KOSIS API 키
const KOSIS_API_KEY = 'ZjZjOTI3MjRjNmU1YzdhZTMwOWRjNjgxN2MzNDgwNmY=';
const KOSIS_BASE_URL = 'http://kosis.kr/openapi/Expt/statisticsList.do';

// 통계 목록 조회 API
app.get('/api/statistics', async (req, res) => {
    try {
        const { vwcd, listLev, parentId } = req.query;
        
        const response = await axios.get(KOSIS_BASE_URL, {
            params: {
                key: KOSIS_API_KEY,
                vwcd: vwcd || 'MT_ZTITLE',
                listLev: listLev || '1',
                parentId: parentId || '0'
            }
        });
        
        res.json(response.data);
    } catch (error) {
        console.error('KOSIS API 오류:', error);
        res.status(500).json({ error: '통계 데이터 조회 중 오류가 발생했습니다.' });
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});