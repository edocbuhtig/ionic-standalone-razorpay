# Ionic 7 Standalone RazorPay

Ionic Standalone RazorPay Payment Gateway Integration Starter

## Steps:
- Create a RazorPay Developer (Merchant) Account
- - Make sure to update your package ID in capacitorconfig.ts (appId: 'com.sunilk.razorpayTestApp')
  - ionic build (generate the www folder)<- this, step is imp for Capacitor RazorPay plugin v5.
 - ionic cap add platform (android/ios)<- this, step is imp for Capacitor RazorPay plugin v5.
- Update  RazorPay (TEST) SECERET KEYS in the project files for both (Ionic:environment.ts ) & (nodejs: Dot env)

- [Capacitor Plugin Standard SDK](https://razorpay.com/docs/payments/payment-gateway/capacitor-integration/?preferred-country=IN)

