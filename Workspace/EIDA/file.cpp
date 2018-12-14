#include <iostream.h>
#include <conio.h>
#include <string.h>

class sortedmerge
{

  public:
    int a[10], b[10], c[10], m, n, count, userinput[100];

  public:
    void getdata()
    {
        string tryagain = "Y";
        while (tryagain.compare("Y")) == 0 || tryagain.compare("y")) == 0)
        {
            cout << "Please input a number: ";
            cin >> userinput[count];

            while (cin.fail())
            {
                cout << "I'm sorry.  Only numbers will work. \n";
                cin.clear();
                cin.ignore();
                cout << "Pick a positive number: ";
                cin >> userinput[count];
            }

            ++count;

            cout << "Would you like to do another? Y or N: ";
            cin >> tryagain;
        }

        cout << "Enter the limit of array 1?\n";
        cin >> m;
        cout << "enter " << m << "elements in ascending order ?\n";
        for (int i = 0; i < m; i++)
        {
            cin >> a[i];
        }
        cout << " enter the limit of array 2?\n";
        cin >> n;
        cout << "enter" << n << "elements in ascending order?\n";
        for (int i = 0; i < n; i++)
        {
            cin >> b[i];
        }
    }
    void merge()
    {
        int i = 0, j = 0, k = 0;
        while ((i < m) && (j < n))
        {
            if (a[i] <= b[j])
            {
                c[k] = a[i];
                i++;
            }
            else
            {
                c[k] = b[j];
                j++;
            }
            k++;
        }
        while (i < m)
        {
            c[k] = a[i];
            i++;
            k++;
        }
        while (j < n)
        {
            c[k] = b[j];
            j++;
            k++;
        }
    }
    void print()
    {
        cout << "elements are \n";
        int tlength = m + n;
        for (int i = 0; i < tlength; i++)
        {
            cout << c[i];
            if (i != tlength - 1)
            {
                cout << ",";
            }
        }
        cout << "\n";
    }
};
void main()
{
    sortedmerge s1;
    s1.getdata();
    s1.merge();
    s1.print();
    system("pause");
}