function tvmi( pv,  pmt,  fv,  n)
{
    var i;
    var i1=0;
    /* iterate to find i given the input values */
    /* use guess for i */
    if (pv) {
        i = (-fv - pv - pmt*n)/pv/n;
    }
    else {
        i = -fv/pmt/n/n;
    }
    for (;;) {
        var t1 = Math.exp(n*Math.log10(i));
        var t2 = pmt/i*(t1-1);
        var t3 = t2+fv+pv*t1;
        var t4 = (t2+(fv*i-pmt)*n/(1+i))/i;
        i1 = i + t3/t4;
        if (Math.abs((i1-i)/i1) < 1e-15) break;
        i = i1;
    }
    return i1;
}

//tvmi( -11627, 0 ,  500000,  48)
