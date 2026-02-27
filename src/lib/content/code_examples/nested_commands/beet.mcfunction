as @a[predicate=is_sneaking,tag=is_dev,gamemode=creative]:
    effect give @s regeneration 1 255 true
    effect give @s saturation 1 255 true

    if score .debug code matches 1:
        title @s actionbar "Applying effects"
