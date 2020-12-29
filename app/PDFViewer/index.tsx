import React, { useState } from 'react';
import {View, Text, Pressable} from 'react-native';
import Pdf from 'react-native-pdf';

function PDFViewer() {
  const [pdfInfo, setPdfInfo] = useState();
  const source = {uri: 'http://retina-system-test.oss-cn-shanghai.aliyuncs.com/exam976%2Freport_1454_reviewed.pdf?security-token=CAIShgJ1q6Ft5B2yfSjIr5bTHuDugO1Jw5GOVVbrlFMFfcx4of2dpzz2IHtEe3hvCOEasP01nm1Y5v8blqVoRoReREvCKM1565kPXvIr4AiH6aKP9rUhpMCPOwr6UmzWvqL7Z%2BH%2BU6muGJOEYEzFkSle2KbzcS7YMXWuLZyOj%2BwMDL1VJH7aCwBLH9BLPABvhdYHPH%2FKT5aXPwXtn3DbATgD2GM%2Bqxsmtv7gmZ3MskuC1wCqlLJMnemrfMj4NfsLFYxkTtK40NZxcqf8yyNK43BIjvwt3PMVpmaW4o%2FEWQMMs0XfavCn%2B9luPRJ%2FYbMhB6lHof7zmPt1oOXPkJ7tzBJALXL1uMJ5zWDLGoABaiJIy0leE43JyvOWlhTc6L4CgzD9eVLBDKcQYYRKJrdkrsxS4HfsFi%2F27BeANlHI6HszkeBqVuDqu8LGI2inESqXuJt8KjexLhkXjUPcP%2FLaPZmc%2Fb6YKe8Zsv9tTlFFKGklkeiz2ZINZxzpZpI5hRRtJywYCsuHr04zbmwJPoY%3D&OSSAccessKeyId=STS.NUfUZZm2htSeWpZpSPqCTN86E&Expires=1609228127&Signature=cNDvVjOS8THsGFrbYUVSlLJBukc%3D'};
  // const source = {cache: true,uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf'};

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{ padding: 16 }}>

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
