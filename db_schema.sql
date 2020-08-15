CREATE TABLE IF NOT EXISTS `tickets`
(                                         
  `id` int(11) NOT NULL AUTO_INCREMENT,                          
  `project` int(11) NOT NULL,                                     
  `title` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reporter` int(11) NOT NULL,                                    
  `issue_type` int(11) NOT NULL,                                   
  `assignee` int(11) DEFAULT NULL,                                
  `story_points` int(11) DEFAULT NULL,                             
  `priority` int(11) DEFAULT NULL,                                 
  `due_date` datetime DEFAULT NULL,                                
  PRIMARY KEY(`id`)                                               
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
