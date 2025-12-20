SELECT
  z.`字`,
  k.`漢音`
  FROM
    `廣韻小韻日本漢音表.csv` AS k
    INNER JOIN `隋語廣韻全字表.csv` AS z
        ON k.`小韻` = z.`小韻`
 WHERE
  k.`漢音` IS NOT NULL
