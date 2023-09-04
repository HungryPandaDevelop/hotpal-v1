const fs = require('fs');
const ZstdCodec = require('zstd-codec').ZstdCodec;

const inputFileName = './data/partner_feed_en.json.zst'; // Замените на имя вашего файла .zst

// Чтение данных из файла .zst
const compressedData = fs.readFileSync(inputFileName);

// Распаковка данных
ZstdCodec.run(zstd => {
    const streaming = new zstd.Streaming();
    
    const decompressedData = streaming.decompress(compressedData);
    
    try {
        // Разбор JSON
        const jsonData = JSON.parse(decompressedData.toString());
        
        // Теперь у вас есть доступ к данным из JSON
        console.log(jsonData);
    } catch (parseError) {
        console.error('Ошибка разбора JSON:', parseError);
    }
});