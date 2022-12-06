//in  nested loop  you  have a outer loop  with counter 'i' and inner loop counter  'j'
//nested loop is used to run multiple task in same time
// more number of nested loop will make your code run  slower
// now it is a simple loop 
for ( var i=2023; i<2025;i++)
{

    console.log(i)
}
//now making  a nested loop example
for ( var i=2023; i<2025;i++)
{

    console.log(i)
    for(var j=6;j<9;j++)
    {
        console.log("---------", j)
    }
}
//replace year and month by i and j because it is development standard
for ( var i=2023; i<2025;i++)
{

    console.log(i)
    for(var j=6;j<9;j++)
    {
        console.log("---------", j)
    }
}