import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  Image,
  Font,
} from '@react-pdf/renderer';
import {
  formatDate,
  formatRupiah,
  getDaysDifference,
} from '../../../utils/formatUtil';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  descDetail: {
    fontSize: 14,
    marginBottom: 4,
  },
  section: {
    marginBottom: 10,
  },
  headerMain: {
    fontSize: 12,
    marginBottom: 10,
    color: 'grey',
    textAlign: 'center',
  },
  header: {
    fontSize: 12,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#36C2CE',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeaderNumber: {
    width: '10%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#f3f3f3',
  },
  tableColHeader: {
    width: '22.5%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#f3f3f3',
  },
  tableColNumber: {
    width: '10%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: '22.5%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 'auto',
    fontSize: 10,
    fontWeight: 'bold',
  },
  tableCell: {
    margin: 'auto',
    fontSize: 10,
  },
  footer: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#bfbfbf',
    paddingTop: 10,
  },
  logo: {
    width: 100,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
});

Font.register({
  family: 'Poppins',
  src: 'http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf',
});

const PDFGenerate = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.headerMain}>Bukti Pembelian (Receipt)</Text>
        <Text style={styles.title}>Nomor: #{data.id}</Text>
        <Text style={styles.headerMain}>
          Tanggal: {formatDate(data.createdAt)}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Detail Pemesan</Text>
        <Text style={styles.descDetail}>Email : {data?.User?.email}</Text>
        <Text style={styles.descDetail}>No. Kontak : 1234567890</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Detail Perusahaan</Text>
        <Text style={styles.descDetail}>Nama: Binar Car Rental</Text>
        <Text style={styles.descDetail}>Email: binarcarrental@gmail.com</Text>
        <Text style={styles.descDetail}>
          Alamat: Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Detail Pembelian</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeaderNumber}>
              <Text style={styles.tableCellHeader}>No.</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Nama Mobil</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Hari</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Harga Satuan</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Harga Total</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColNumber}>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{data?.Car?.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                {getDaysDifference(data.start_rent_at, data.finish_rent_at)}
              </Text>
            </View>
            75
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                {formatRupiah(data?.Car?.price)}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                {formatRupiah(data.total_price)}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20, textAlign: 'right' }}>
          <Text>Total : {formatRupiah(data.total_price)}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.footer}>
          Untuk pertanyaan apa pun, hubungi 081-233-334-808
        </Text>
      </View>
    </Page>
  </Document>
);

export default PDFGenerate;
