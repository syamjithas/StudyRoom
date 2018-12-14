#include <iostream>
using namespace std;

void ConvertToBinary(int n)
{
    if (n / 2 != 0)
    {
        ConvertToBinary(n / 2);
    }
    printf("%d", n % 2);
}

int main()
{
    unsigned int num;
    cout << "Enter the number : ";
    cin >> num;
    while (cin.fail())
    {
        cout << "Only Number is allowed \n";
        cin.clear();
        cin.ignore();
        cout << "Please enter a valid number : ";
        cin >> num;
    }
    cout << "The binary equivalent of " << num << " is ";
    ConvertToBinary(num);
    return 0;
}