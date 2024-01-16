import { SESClient } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
   region: 'eu-north-1',
   credentials: {
      accessKeyId: "AKIAZL6AEHK5U5DHHOMV"   , 
   secretAccessKey: "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", 
   },
 });
 

export { sesClient };



