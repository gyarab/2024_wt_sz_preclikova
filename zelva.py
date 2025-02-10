import turtle 

t = turtle.Turtle() 

screen = turtle.Screen()

t.color("green")
t.shape("turtle")
t.speed(1)
  
#nahoru rovne
t.left(90)
t.forward(50) 

# nahore doprava
t.right(90)
t.forward(50)

#sikmo pravy horni roh do dolniho leveho
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













# t.end_fill() 
  
# for top of 
# the house 
# t.fillcolor('brown') 
# t.begin_fill() 

# t.end_fill() 
  
# _____

#from turtle import forward, exitonclick, left
#from turtle import shape

#shape('turtle')


#forward(50)
#left(90)
#forward(50)
#left(90)
#forward(50)

#left(90)
#forward(50)

#exitonclick()