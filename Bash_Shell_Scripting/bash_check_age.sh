#!/bin/bash
read -p "Enter your age: " age
 
if [[ $age -lt 18 ]]
then
	echo "You are minor!"
elif [[ $age -eq 18 ]]
then
	echo "Congratulations, you've just become major!"
else
	echo "You are major!"
fi

# Move to the script's directory and run it as: ./script_name.sh
