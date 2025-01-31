# we need an input
if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit
fi

day=$1
prev_day=$(($day-1))

# make sure day is a number
re='^[0-9]+$'
if ! [[ $day =~ $re ]] ; then
   echo "error: Day is not a number" >&2; exit 1
fi

# make sure we are in current dir
cd "$(dirname "$0")"

# copy tests, src and input templates
cp -R src/$prev_day src/$day
cp -R test/$prev_day test/$day
cp input/$prev_day.txt input/$day.txt

