SELECT
  z.`字`,
  k.`漢音`
  FROM
    `廣韻小韻日本漢音表.csv` AS k
    INNER JOIN ((SELECT
                   z1.`字`,
                   z1.`小韻`
                   FROM `隋語廣韻全字表.csv` AS z1)
                   UNION ALL
                   (SELECT
                      i.`字`,
                      z2.`小韻`
                      FROM `隋語廣韻全字表.csv` AS z2
                           INNER JOIN `itaiji.csv` AS i
                               ON z2.`字` = i.`異体字`))
                 AS z
        ON k.`小韻` = z.`小韻`
 WHERE
  k.`漢音` IS NOT NULL
