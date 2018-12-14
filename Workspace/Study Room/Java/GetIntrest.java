//*******************************************************************
// Dear CompileJava users,
//
// CompileJava has been operating since 2013 completely free. If you
// find this site useful, or would otherwise like to contribute, then
// please consider a donation (link in 'More Info' tab) to support
// development of the new CompileJava website (stay tuned!).
//
// Most sincerely, Z.
//*******************************************************************

import java.lang.Math; // headers MUST be above the first class

// one class needs to have a main() method
public class GetIntrest
{
  // arguments are passed using the text field below this editor
  public static void main(String[] args)
  {
    double nper;
    double pmt;
    double pv;
    double fv;
    double type;
    double guess;
    //FROM MS http://office.microsoft.com/en-us/excel-help/rate-HP005209232.aspx
    int FINANCIAL_MAX_ITERATIONS = 20; //Bet accuracy with 128
    double FINANCIAL_PRECISION = 0.0000001; //1.0e-8

    double y, y0, y1, x0, x1 = 0, f = 0, i = 0;
    double rate = guess;
    if (Math.abs(rate) < FINANCIAL_PRECISION) {
       y = pv * (1 + nper * rate) + pmt * (1 + rate * type) * nper + fv;
    }
    else {
       f = Math.pow(1 + rate, nper); //Math.exp(nper * Math.log(1 + rate));
       y = pv * f + pmt * (1 / rate + type) * (f - 1) + fv;
    }
    y0 = pv + pmt * nper + fv;
    y1 = pv * f + pmt * (1 / rate + type) * (f - 1) + fv;

    // Find root by the Newton secant method
    i = x0 = 0.0;
    x1 = rate;
    while ((Math.abs(y0 - y1) > FINANCIAL_PRECISION) && (i < FINANCIAL_MAX_ITERATIONS)) {
       rate = (y1 * x0 - y0 * x1) / (y1 - y0);
       x0 = x1;
       x1 = rate;

       if (Math.abs(rate) < FINANCIAL_PRECISION) {
          y = pv * (1 + nper * rate) + pmt * (1 + rate * type) * nper + fv;
       }
       else {
          f = Math.exp(nper * Math.log(1 + rate));
          y = pv * f + pmt * (1 / rate + type) * (f - 1) + fv;
       }

       y0 = y1;
       y1 = y;
       ++i;
    }
    System.out.print( rate);
  }
}

private double calculateRate() {

  //FROM MS http://office.microsoft.com/en-us/excel-help/rate-HP005209232.aspx
  int FINANCIAL_MAX_ITERATIONS = 20; //Bet accuracy with 128
  double FINANCIAL_PRECISION = 0.0000001; //1.0e-8

  double y, y0, y1, x0, x1 = 0, f = 0, i = 0;
  double rate = guess;
  if (Math.abs(rate) < FINANCIAL_PRECISION) {
     y = pv * (1 + nper * rate) + pmt * (1 + rate * type) * nper + fv;
  }
  else {
     f = Math.exp(nper * Math.log(1 + rate));
     y = pv * f + pmt * (1 / rate + type) * (f - 1) + fv;
  }
  y0 = pv + pmt * nper + fv;
  y1 = pv * f + pmt * (1 / rate + type) * (f - 1) + fv;

  // Find root by the Newton secant method
  i = x0 = 0.0;
  x1 = rate;
  while ((Math.abs(y0 - y1) > FINANCIAL_PRECISION) && (i < FINANCIAL_MAX_ITERATIONS)) {
     rate = (y1 * x0 - y0 * x1) / (y1 - y0);
     x0 = x1;
     x1 = rate;

     if (Math.abs(rate) < FINANCIAL_PRECISION) {
        y = pv * (1 + nper * rate) + pmt * (1 + rate * type) * nper + fv;
     }
     else {
        f = Math.exp(nper * Math.log(1 + rate));
        y = pv * f + pmt * (1 / rate + type) * (f - 1) + fv;
     }

     y0 = y1;
     y1 = y;
     ++i;
  }
  return rate;
}
