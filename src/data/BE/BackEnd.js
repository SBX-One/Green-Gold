import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const KERANJANG_PATH = path.join(__dirname, '../Keranjang.json');

// Fungsi baca Keranjang.json
function readKeranjang() {
    try {
        const data = fs.readFileSync(KERANJANG_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Fungsi simpan ke Keranjang.json
function writeKeranjang(data) {
    fs.writeFileSync(KERANJANG_PATH, JSON.stringify(data, null, 4));
}

// GET: Ambil semua item keranjang
app.get('/api/keranjang', (req, res) => {
    const keranjang = readKeranjang(); // ✅ pakai KERANJANG_PATH via readKeranjang()
    res.json(keranjang);
});

// POST: Tambah atau update item
app.post('/api/keranjang', (req, res) => {
    const { id, namaBarang, variant, harga, jumlah } = req.body;
    const keranjang = readKeranjang(); // ✅ pakai KERANJANG_PATH via readKeranjang()

    const existingIndex = keranjang.findIndex(item => item.id === id);

    if (existingIndex !== -1) {
        keranjang[existingIndex].jumlah = jumlah; // update
    } else {
        keranjang.push({ id, namaBarang, variant, harga, jumlah }); // insert baru
    }

    writeKeranjang(keranjang); // ✅ pakai KERANJANG_PATH via writeKeranjang()
    res.json({ success: true, data: keranjang });
});

// PUT: Update jumlah item berdasarkan id & variant
app.put('/api/keranjang/:id/:variant', (req, res) => {
    try {
        const { id, variant } = req.params;
        const { jumlah } = req.body;
        let keranjang = readKeranjang();

        const item = keranjang.find(item => String(item.id) === id && item.variant === variant);
        if (!item) {
            return res.status(404).json({ error: 'Item tidak ditemukan' });
        }

        if (jumlah <= 0) {
            keranjang = keranjang.filter(i => !(String(i.id) === id && i.variant === variant));
        } else {
            item.jumlah = jumlah;
        }

        writeKeranjang(keranjang);
        res.json({ success: true, message: 'Item berhasil diupdate', keranjang });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE: Hapus item berdasarkan id & variant
app.delete('/api/keranjang/:id/:variant', (req, res) => {
    try {
        const { id, variant } = req.params;
        let keranjang = readKeranjang();

        keranjang = keranjang.filter(
            item => !(String(item.id) === id && item.variant === variant)
        );

        writeKeranjang(keranjang);
        res.json({ success: true, message: 'Item berhasil dihapus', keranjang });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

export default app;