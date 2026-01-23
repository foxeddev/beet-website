execute store result score #rotation temp run random value 0..7
execute if score #rotation temp matches 0 run data modify entity @s Rotation[0] set value 0
execute if score #rotation temp matches 1 run data modify entity @s Rotation[0] set value 45
execute if score #rotation temp matches 2 run data modify entity @s Rotation[0] set value 90
execute if score #rotation temp matches 3 run data modify entity @s Rotation[0] set value 135
execute if score #rotation temp matches 4 run data modify entity @s Rotation[0] set value 180
execute if score #rotation temp matches 5 run data modify entity @s Rotation[0] set value 225
execute if score #rotation temp matches 6 run data modify entity @s Rotation[0] set value 270
execute if score #rotation temp matches 7 run data modify entity @s Rotation[0] set value 315
scoreboard players reset #rotation temp
