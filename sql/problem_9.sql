-- 9.a - получить значения свойств товара, если известно его ID
SELECT property.name, property_value.value AS 'Product properties values:'
FROM property_value
         INNER JOIN product ON property_value.product_id = product.id
         INNER JOIN property ON property_value.property_id = property.id
WHERE property_value.product_id = givenProductId;

-- 9.b - получить список названий уникальных свойств товара по названию категории
-- (свойство должно быть только у 1 товара в категории).
SELECT category.name, property.name
FROM property_value
         INNER JOIN property ON property_value.property_id = property.id
         INNER JOIN product ON property_value.product_id = product.id
         INNER JOIN category ON product.category_id = category.id
WHERE category.name = givenCategoryName
GROUP BY category.id, property.id
HAVING COUNT(product.id) = 1;

-- На малых объёмах данных запросы работают корректно. На больших объёмах данных производительность не замерялась