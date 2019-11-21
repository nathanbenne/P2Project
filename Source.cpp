//Timmy Perrine
//Electronic Doorman

#include <iostream>
#include <sstream>
#include <string>

using namespace std;

int main()
{
	string name;
	string dateString;

	cout << "Enter your name: ";
	cin >> name;
	cout << "Enter your Birthdate ('YYYY-MM-DD'): ";
	cin >> dateString;

	string yearString, monthString, dayString;
	int count = 0;

	for (unsigned int i = 0; i < dateString.length(); ++i)
	{
		if (dateString[i] == '-')
		{
			count++;
			i++;
		}
		switch (count)
		{
		case(0):
			yearString += dateString[i];
			break;
		case(1):
			monthString += dateString[i];
			break;
		case(2):
			dayString += dateString[i];
			break;
		default:
			break;
		}
	}

	int year = 0, month = 0, day = 0;
	stringstream s1;
	s1 << yearString;
	s1 >> year;
	s1.flush();
	s1 << monthString;
	s1 >> month;
	s1.flush();
	s1 << dayString;
	s1 >> day;

	const int compareYear = 2019, compareMonth = 04, compareDay = 20;
	bool yearCheck = false;
	bool dateCheck = false;

	if (compareYear - year >= 21)
	{
		yearCheck = true;
	}

	if (month >= compareMonth && day >= compareDay)
	{
		dateCheck = true;
	}

	if (yearCheck && dateCheck)
	{
		cout << "Congrats " << name << " you can drink!" << endl;
	}
	else
	{
		cout << "Piss off " << name << " you need to grow up." << endl;
	}


	return 0;
}