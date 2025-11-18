## ১) Interface এবং Type-এর মধ্যে পার্থক্য

TypeScript-এ দুটোই ডেটার গঠন (shape) ঠিক করতে ব্যবহৃত হয়, তবে ব্যবহারক্ষেত্র আলাদা।

**Interface**
- অবজেক্টের কাঠামো তৈরিতে ব্যবহৃত হয়
- একই নামের একাধিক Interface ঘোষণা করা যায় (Declaration Merging)
- Extend করা সহজ

**উদাহরণ**
```
interface User {
  name: string;
}

interface User {
  age: number;
}

// Final User = { name: string; age: number; }
```

**Type**
- Object, Union, Intersection, Primitive — সবকিছু define করা যায়
- Merge হয় না; একই নামে দ্বিতীয়বার Type ঘোষণা করা নিষিদ্ধ
- Complex টাইপ বানাতে শক্তিশালী

**উদাহরণ**
```
type Admin = {
  name: string;
  role: string;
};

type ID = string | number;
```

## ২) `keyof` কীওয়ার্ডের ব্যবহার

`keyof` একটি object type-এর সব property নামকে String Literal Union টাইপে রূপান্তর করে।

**উপকারিতা**
- Generic function-এ খুব কাজে লাগে
- ভুল key access রোধ করে
- Code আরও safe করে

**উদাহরণ**
```
type Product = {
  id: number;
  price: number;
  title: string;
};

type ProductKeys = keyof Product;
// "id" | "price" | "title"

function getProductValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const laptop = { id: 101, price: 50000, title: "Pro Laptop" };

const productName = getProductValue(laptop, "title"); // "Pro Laptop"
// getProductValue(laptop, "stock"); // Error
```