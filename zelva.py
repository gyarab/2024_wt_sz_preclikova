import turtle 

t = turtle.Turtle() 

screen = turtle.Screen()

t.color("green")
t.shape("turtle")
t.speed(1)
  
# nahoru rovne
t.left(90)
t.forward(50) 

# nahore doprava
t.right(90)
t.forward(50)

#sikmo pravy horni roh - dolniho leveho
t.right(135)
t.forward(70.7)

# levy roh dole - pravy dolni 
t.left(135)
t.forward(50)

# pravy dolni - pravy horni 
t.left(90)
t.forward(50)

# Strecha 
#pravy horni - spicka 
t.left(45)
t.forward(35.35)

# spicka - levy horni 
t.left(90)
t.forward(35.35)

# levy horni - pravy dolni 
t.left(90)
t.forward(70.7)