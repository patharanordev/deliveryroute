# deliveryroute
Set route and go

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A8YE92K9QM7NA)

This library looks like path finding. You can create your route(s) with cost of delivery route. You can travel on your route by set source and destination.

## Usage

The library doesn’t have UI but you can test input/output via console with `nodejs` by run command below :

```
node index
```

The first thing, you must create your route first. One route including 3 parts source, destination and delivery cost. Any source is a character or first alphabet of source town name concatinate with the first alphabet of destination town name in uppercase and then delivery cost between two towns in numeric that's more than zero.

```
Ex.
     - You source is Aumarin -> "A"
     - You destination is Mercury -> "M"
     - Cost between two towns(assume) is 5 km. -> "5"
       (don't care about unit)
       
So you can define your route with "AM5" etc.
```

After you have added routes already, you can calculate delivery cost by using command `findcost` and following  first alphbet of source/destination in uppercase. In each node will be separate with `-`, please refer example below :

```
findcost A-B-C
```

If your route can't be solved, it will show `No Such Route`. Show all commands, type `help`.

Command :
```
 clsdebug - close debug message.
 opndebug - open debug message.
 findcost - calculate cost of delivery route.
 help     - print all command.
```

## Limitation

#### Important!
- [x] This library can bring you to destination.
- [x] Custom path finding algorithm.
- [ ] Correct delivery cost.
- [ ] Find the cheapest delivery route. (shortest path)
- [ ] Using path finding algorithm like BFS or Dijkstras or A*

## Donation

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A8YE92K9QM7NA)

## License

MIT
