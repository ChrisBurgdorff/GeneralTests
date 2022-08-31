> There are 100 closed lockers in a hallway. A man begins by opening all 100 lockers.
> Next, he closes every second locker.
> Then, on his third pass, he toggles every third locker (closes if it is open or opens it if it is closed).
> This Process continues for 100 passes such that on each pass i, the man toggles every ith locker.
> After his 100th pass in the hallway, in which he toggles only locker # 100, how many lockers are open?
> Attempt to solve the problem without using brute force!

---

Start by thinking about what makes a locker end up closed or open.  In the beginning they are all closed, so lockers that are toggled an even number of times wlll be closed, and lockers that are toggled an odd number of times will be open.

A locker is toggled once for each of its unique factors. For example, # 10 will be toggled four times (1, 2, 5, 10).

Since the only time a factor won't have a corresponding *unique* factor is in the case of a square, the only lockers that will have an odd number of factors (and thus be open in the end) are **perfect squares**. (for example: #9 will be toggled at i = 1, 3, 9)

Now you can just count the perfect squares, or even generalize it to return the number of perfect squares in a given range.
