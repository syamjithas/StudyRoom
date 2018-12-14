#include <iostream>
#include <conio.h>
#include <string.h>

using namespace std;
class product
{
  private:
    string productName;
    float price;

  public:
    void display()
    {
        cout << productName << price << "\n";
    }
    void setProductName()
    {
        cout << "Please enter the product name: ";
        cin >> productName;
        while (cin.fail())
        {
            cout << "Only String is allowed \n";
            cin.clear();
            cin.ignore();
            cout << "Please enter a valid product name: ";
            cin >> productName;
        }
    }
    void setPrice()
    {
        cout << "Please enter the product price: ";
        cin >> price;
        while (cin.fail())
        {
            cout << "Only float is allowed \n";
            cin.clear();
            cin.ignore();
            cout << "Please enter a valid price: ";
            cin >> price;
        }
    }
};

class products
{
  private:
    int count;
    int i;
    product *items;

  public:
    products(int no) : items(new product[no]){};
    void setProducts()
    {
        string tryagain = "Y";
        count = 0;
        while (tryagain.compare("Y") == 0 || tryagain.compare("y") == 0)
        {
            items[count].setProductName();
            items[count].setPrice();
            ++count;
            cout << "Would you like to add another product? Y or N: ";
            cin >> tryagain;
        }
    }
    void getProducts()
    {
        i = 0;
        while (i < count)
        {
            items[i].display();
            i++;
        }
    }
};

int main()
{
    int count;
    cout << "Please Enter the number of max product: ";
    cin >> count;
    products productList(count);
    productList.setProducts();
    productList.getProducts();
    return 0;
}
