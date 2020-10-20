namespace bookshop102;

using { cuid, managed } from '@sap/cds/common';

entity Books : cuid {
    //key id : Integer;
    title : String(100);
    stock   : Integer;
    author : Association to Authors;
}

entity Authors  {
    key id  : Integer;
    name : String(100);
    books : Association to many Books on books.author = $self;
}
