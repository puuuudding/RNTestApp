import React, { useState } from 'react';
import {View, Text, Pressable, Platform} from 'react-native';
import Pdf from 'react-native-pdf';
import * as Print from 'expo-print';

function PDFViewer() {
  const [printer, setPrinter] = useState<Print.Printer>();
  const source = {cache: true,uri:'http://retina-system-test.oss-cn-shanghai.aliyuncs.com/exam968%2Freport_1373_reviewed.pdf?security-token=CAIShgJ1q6Ft5B2yfSjIr5bsOOrf3K5x%2F6meN2PDnFdmVuZnnfbGlDz2IHtEe3hvCOEasP01nm1Y5v8blqVoRoReREvCKM1565kPLplu5QiH6aKP9rUhpMCPOwr6UmzWvqL7Z%2BH%2BU6muGJOEYEzFkSle2KbzcS7YMXWuLZyOj%2BwMDL1VJH7aCwBLH9BLPABvhdYHPH%2FKT5aXPwXtn3DbATgD2GM%2Bqxsmtv7gmZ3MskuC1wCqlLJMnemrfMj4NfsLFYxkTtK40NZxcqf8yyNK43BIjvwt3PMVpmaW4o%2FEWQMMs0XfavCn%2B9luPRJ%2FYbMhB6lHof7zmPt1oOXPkJ7tzBJALXL1uMJ5zWDLGoABNsiga8cMN468k1mWGL2mdJkQP2mpKiyO%2FupuBzOd2k9tCT3h6tYjsY381qr84UuDDnc7W7PbEa%2FzM%2BOEKxvs8NI%2FWh7NRPMlJ9Zu9opiuSFjQ5gt56UGz85x%2FNGdDyTgxZgGEQEhJi2Z%2BWoTJleiX6ZA8Yjjakms%2F8MIjR5b%2FeU%3D&OSSAccessKeyId=STS.NUYsPk1qPHku5ErxW3ZiKr3mv&Expires=1609233463&Signature=EWCMV1eczvdFFykUiMFFMXCq0Qg%3D'};
  // const source = {cache: true,uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf'};

  const handleSelect = async () => {
    if (Platform.OS === 'android') return;
    try {
      const result = await Print.selectPrinterAsync();
      setPrinter(result);
    } catch {/* empty */}
  };
  const handlePrint = async () => {
    try {
      await Print.printAsync({
        uri: source.uri,
        printerUrl: printer?.url,
        orientation: Print.Orientation.portrait,
      });
    } catch {/* empty */}
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{ padding: 16 }}>
        <Pressable hitSlop={8} style={{padding: 8, backgroundColor: '#0bb', borderRadius: 4}} onPress={handleSelect}>
          <Text>Select Printer (iOS only)</Text>
        </Pressable>
        <Text style={{marginTop: 8, marginLeft: 8}}>Printer: {printer?.name}</Text>
        <Pressable hitSlop={8} style={{marginTop: 8, padding: 8, backgroundColor: '#0bb', borderRadius: 4}} onPress={handlePrint}>
          <Text>Print</Text>
        </Pressable>
      </View>

      <View style={{flex:1, padding: 16}}>
        <Pdf
          source={source}
          style={{flex: 1}}
        />
      </View>
    </View>
  );
}

export default PDFViewer;
